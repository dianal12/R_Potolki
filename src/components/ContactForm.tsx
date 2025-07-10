import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLeads } from '../hooks/useLeads';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

const schema = yup.object({
  name: yup.string().required('Имя обязательно'),
  phone: yup.string().required('Телефон обязателен'),
  message: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { createLead } = useLeads();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    
    const { error } = await createLead(data);
    
    if (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } else {
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Имя</label>
          <input 
            {...register('name')}
            type="text" 
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ваше имя"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Телефон</label>
          <input 
            {...register('phone')}
            type="tel" 
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+7 (999) 123-45-67"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Сообщение</label>
          <textarea 
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Расскажите о вашем проекте..."
          />
        </div>
        
        <button 
          type="submit" 
          disabled={submitStatus === 'loading'}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {submitStatus === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
          {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
          {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
          {submitStatus === 'loading' ? 'Отправляем...' : 
           submitStatus === 'success' ? 'Заявка отправлена!' :
           submitStatus === 'error' ? 'Ошибка отправки' :
           'Отправить заявку'}
        </button>
      </form>
    </div>
  );
}