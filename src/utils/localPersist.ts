import type { StorageKeysType } from '@/common/types';
import AsyncStorage from '@/proxies/asyncStorage/AsyncStorageProvider';
import EncryptedStorage from '@/proxies/encryptedStorage/EncryptedStorageProvider';

// eslint-disable-next-line import/prefer-default-export
export const localPersist = (storageKey: StorageKeysType, isEncrypted: boolean = false) => {
  const Encryptor = isEncrypted ? EncryptedStorage : AsyncStorage;

  const save = async (value: any) => {
    if (value === null || value === undefined) {
      throw new Error('A valid value must be supplied');
    }
    const str = JSON.stringify(value);
    await Encryptor.setItem(storageKey, str);
    return true;
  };

  const get = async () => {
    const val = await Encryptor.getItem(storageKey);
    if (!val) {
      return undefined;
    }
    return JSON.parse(val);
  };

  const remove = async () => {
    await Encryptor.removeItem(storageKey);
  };

  return { save, get, remove };
};
