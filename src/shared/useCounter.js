import { ref } from "vue";


export function useCounter(initalValue = 0) {
  let count = ref(initalValue);
  const increment = () => count.value++;
  const decrement = () => count.value--;
  return { count, increment, decrement };
}

