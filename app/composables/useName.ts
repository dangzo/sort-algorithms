interface UseNameParams {
  initialName?: string;
}

export const useName = (params: UseNameParams = {}) => {
  const name = ref(params.initialName);

  function updateName(newName: string) {
    name.value = newName;
  }

  return {
    name,
    updateName,
  };
};
