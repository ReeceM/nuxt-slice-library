<template>
  <container class="mt-10" :style="{backgroundColor: theme.background}">
    <div class="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">

    </div>
  </container>
</template>
<script>
import {
  Container
} from '@/components'
import { commonProps } from '../../utils'

export default {
  components: {
    Container
  },
  props: {
    ... commonProps
  },
}
</script>
