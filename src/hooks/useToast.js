import { Buffer } from 'buffer';
import { useDispatch, useSelector } from 'react-redux';
import { addToast, popToast } from '../redux/toast/slice';

export const useToast = () => {
  const dispatch = useDispatch();
  const encodeBase64 = (str) => Buffer.from(str, 'binary').toString('base64');

  const fireToast = ({ message, type, duration = 2000 }) => {
    const id = encodeBase64(String(new Date().getTime()).slice(-6));
    dispatch(addToast({
      message, type, duration, id,
    }));
    setTimeout(() => dispatch(popToast({ id })), duration + 600);
  };

  return { fireToast };
};

export const useToasts = () => useSelector((state) => state.toast);
