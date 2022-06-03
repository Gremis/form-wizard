<template>
  <div>
    <h1 class="title">Plano de café</h1>

    <h2 class="subtitle">
      Viajamos pelo mundo para obter o melhor café de origem única para você
    </h2>

    <div class="plans">
      <div
        v-for="plan in plans"
        :key="plan.price"
        @click="pickPlan(plan)"
        :class="{'active-plan': selectedPlan === plan}"
        class="plan"
      >
        <div class="weight">
          {{plan.weight}}
        </div>
        <div class="description">
          <span class="title">
              {{plan.name}}
          </span>
          <span class="description">
              {{plan.description}}
          </span>
        </div>
        <div class="price">
          <span class="reais-sign">R$</span>
          <span class="number">{{plan.price}}</span>
        </div>
      </div>
    </div>
    <div v-if="$v.selectedPlan.$error" class="error">você deve escolher um plano para continuar</div>
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        plans: [
          {
            price: 19,
            weight: '250g',
            name: 'O solteiro',
            description: 'Um saco de grãos de café recém-torrados entregues em sua casa todos os meses'
          },
          {
            price: 29,
            weight: '500g',
            name: 'O curioso',
            description: 'Dois tipos diferentes de café acabado de torrar todos os meses'
          },
          {
            price: 49,
            weight: '1kg',
            name: 'O gostoso',
            description: 'Dois sacos de dois tipos diferentes de café torrado todos os meses.'
          }
        ],
        selectedPlan: null
      }
    },
    validations: {
      selectedPlan: {
        required
      }
    },
    methods: {
      pickPlan (plan) {
        this.selectedPlan = plan
      },
      submit () {
        this.$v.$touch()
        return new Promise((resolve, reject) => {
          if (!this.$v.$invalid) {
            resolve({
              plan: this.selectedPlan
            })
          } else {
            reject('plano não selecionado')
          }
        })
      }
    }
  }
</script>