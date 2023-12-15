<template>
  <div class="form-card">
    <div class="form-card__inner">
      <section class="form-card__info-side">
        <div class="form-card__info">
          <div class="form-card__type">
            <h2 class="h2">Форма регистрации участников</h2>
          </div>
          <div class="form-card__author small">
            Автор: user 1
          </div>
        </div>
        <div class="form-card__date">
          <p class="small">Дата создания: 01.01.23</p>
        </div>
      </section>
      <section class="form-card__actions-side">
        <AppButton
          class="form-card__edit-button"
          theme="outline"
        >
          Редактировать
        </AppButton>
        <AppButton
          theme="secondary"
        >
          Удалить
        </AppButton>
      </section>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'FormCard',
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
.form-card {
  height: 190px;
  background: var(--white);;
  border-radius: 10px;
  padding: 24px;

  &__inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  &__info-side, &__actions-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__author, &__date {
    opacity: 0.5;
  }

  & &__edit-button {
    padding: 12px 32px;
  }
}
</style>
