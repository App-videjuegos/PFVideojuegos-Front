import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveItemAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log(`key "${key}" y value "${value}" guardados en AsyncStorage.`);
  } catch (error) {
    console.error("Error al guardar el par key-value en AsyncStorage:", error);
  }
};

export const loadItemAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error al obtener el value desde AsyncStorage:", error);
    return null;
  }
};


export const removeItemAsyncStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("usuario eliminado")
  } catch (error) {
    console.error('Error al eliminar de AsyncStorage:', error);
  }
};


export const showAsyncStorageData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    console.log('Contenido de AsyncStorage:');
    items.forEach(([key, value]) => {
      console.log(key, value);
    });
  } catch (error) {
    console.error('Error al obtener datos de AsyncStorage:', error);
  }
};


export const updateAsyncStorage = async (key, newData) => {
  try {
    // Obtén los datos existentes del AsyncStorage
    const storedData = await AsyncStorage.getItem(key);
    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      const updatedData = { ...parsedData };

      const changedFields = [];
      for (const field in newData) {
        if (newData[field] !== updatedData[field]) {
          updatedData[field] = newData[field];
          changedFields.push(field);
        }
      }

      // Actualiza solo los valores que han cambiado
      if (changedFields.length > 0) {
        await AsyncStorage.setItem(key, JSON.stringify(updatedData));
      }

      return changedFields;
    }
  } catch (error) {
    console.error("Error updating AsyncStorage:", error);
    return [];
  }
};

// Llama a la función para mostrar los datos cuando sea necesario, por ejemplo, en un evento o en un botón
