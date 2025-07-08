import './FeedbackForm.scss'
import React from 'react'

import { Input, Textarea, Button, ErrorMessage } from "@/components/common"
import { sendFeedback } from "@/api"
import { useApi } from "@/hooks"

import { feedbackFormSchema } from "@/schemas"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const FeedbackForm = () => {
  const { fetchApi, isFetching, error } = useApi(sendFeedback)
  const {
    handleSubmit,
    register,
    formState,
    reset
  } = useForm({
    resolver: zodResolver(feedbackFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  })
  const onSubmit = async data => {
    const result = await fetchApi(data)
    if (!result.error) {
      alert('Ваш отзыв был успешно отправлен!')
      reset()
    }
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="feedback-form__title">Обратная форма</h1>

      <div className="feedback-form__inputs-row-wrapper">
        <div className="feedback-form__input-wrapper">
          <Input
            type="text"
            placeholder="Епифан"
            label="Имя"
            name="name"
            id="name"
            disabled={isFetching}
            register={register}
            sizeFull
          />
          <ErrorMessage text={formState.errors.name} />
        </div>

        <div className="feedback-form__input-wrapper">
          <Input
            type="tel"
            placeholder="+7 (423) 123-45-67"
            label="Телефон"
            name="phone"
            id="phone"
            disabled={isFetching}
            register={register}
            sizeFull
          />
          <ErrorMessage text={formState.errors.phone} />
        </div>
      </div>

      <div className="feedback-form__input-wrapper">
        <Input
          type="email"
          placeholder="mail@example.com"
          label="E-mail"
          name="email"
          id="email"
          disabled={isFetching}
          register={register}
        />
        <ErrorMessage text={formState.errors.email} />
      </div>

      <Textarea
        placeholder="Приветствую!"
        label="Сообщение"
        name="message"
        id="message"
        disabled={isFetching}
        register={register}
      />

      <p className="feedback-form__agreement">
        Отправляя форму, Вы соглашаетесь на <a href="#" className="feedback-form__agreement-link">обработку персональных данных</a>
      </p>
      <div className="feedback-form__button-center-wrapper">
        <Button type="submit" disabled={isFetching}>{isFetching ? 'Отправка...' : 'Отправить'}</Button>
      </div>
      <ErrorMessage text={error ? `Не удалось отправить ваш отзыв. Error: ${error.message}` : null} />
    </form>
  )
}
export default FeedbackForm
