import { Formik, Form, Field, ErrorMessage } from 'formik';
import initialValues from '../services/formik/initialValues';
import validationSchema from '../services/formik/validationSchema';

const handleSubmit = data => {
  console.log('### Дані із форми', data);
};

export default function AddEmployee() {
  return (
    <div>
      <h2 className="d-block p-2 bg-primary text-white col-4 mx-auto">
        Форма додавання працівників
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
          <Form className="d-block p-2 bg-primary text-white col-4 mx-auto">
            <div className="form-group">
              <label htmlFor="department">Відділ</label>
              <Field
                as="select"
                name="department"
                id="department"
                className="form-control"
              >
                <option value="відділ-1">Відділ-1</option>
                <option value="відділ-2">Відділ-2</option>
                <option value="відділ-3">Відділ-3</option>
              </Field>
              <ErrorMessage
                name="department"
                component="div"
                className="p-1 mb-1 bg-danger text-white"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Прізвище</label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="p-1 mb-1 bg-danger text-white"
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">Ім'я</label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="p-1 mb-1 bg-danger text-white"
              />
            </div>
            <div className="form-group">
              <label htmlFor="secondName">По-батькові</label>
              <Field
                type="text"
                name="secondName"
                id="secondName"
                className="form-control"
              />
              <ErrorMessage
                name="secondName"
                component="div"
                className="p-1 mb-1 bg-danger text-white"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateBirth">Дата народження</label>
              <Field
                type="date"
                name="dateBirth"
                id="dateBirth"
                className="form-control"
              />
              <ErrorMessage
                name="dateBirth"
                component="div"
                className="p-1 mb-1 bg-danger text-white"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Стать</label>
              <Field type="radio" name="sex" id="sex" value="чоловік" />
              чоловік
              <Field type="radio" name="sex" id="sex" value="жінка" />
              жінка
              <ErrorMessage
                name="sex"
                component="div"
                className="p-1 mb-1 bg-danger text-white"
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Записати
            </button>
          </Form>
        }
      </Formik>
    </div>
  );
}
