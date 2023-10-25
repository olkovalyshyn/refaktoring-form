import { object, string, date } from 'yup';

const validationSchema = object().shape({
  department: string().required("Це поле є обов'язковим"),
  lastName: string().required("Це поле є обов'язковим"),
  firstName: string().required("Це поле є обов'язковим"),
  secondName: string().required("Це поле є обов'язковим"),
  dateBirth: date().required("Це поле є обов'язковим"),
  sex: string().required("Це поле є обов'язковим"),
});

export default validationSchema;
