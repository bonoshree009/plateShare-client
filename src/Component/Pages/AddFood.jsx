import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import imgbbService from '../services/imgbbService';
import foodsApi from '../api/foodsApi';
import { toast } from 'react-toastify';

export default function AddFood() {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const file = data.image[0];
      const imageUrl = await imgbbService.upload(file);
      const payload = {
        name: data.name,
        image: imageUrl,
        quantity_number: Number(data.quantity_number),
        quantity_text: `Serves ${data.quantity_number} people`,
        location: data.location,
        expireDate: data.expireDate,
        notes: data.notes,
        donatorName: user.displayName,
        donatorEmail: user.email,
        donatorPhoto: user.photoURL,
        food_status: 'Available',
        createdAt: new Date().toISOString()
      };
      await foodsApi.createFood(payload);
      toast.success('Food posted successfully');
    } catch (err) {
      toast.error('Failed to add food');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add Food</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('name', { required: true })} placeholder="Food Name" />
        <input type="file" {...register('image', { required: true })} />
        <input type="number" {...register('quantity_number', { required: true, min: 1 })} placeholder="Quantity (number of people)" />
        <input {...register('location', { required: true })} placeholder="Pickup Location" />
        <input type="date" {...register('expireDate', { required: true })} />
        <textarea {...register('notes')} placeholder="Additional notes" />
        <button type="submit">Post Food</button>
      </form>
    </div>
  );
}
