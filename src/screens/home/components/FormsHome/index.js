import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Input, Label, Textarea, Button } from "./formsHome.style";

export default function FormsHome() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("O campo é obrigatório"),
      email: yup
        .string()
        .email("E-mail inválido")
        .required("O campo é obrigatório"),
      phone: yup
        .number()
        .positive()
        .integer()

        .notRequired("O campo é opcional"),
      message: yup
        .string()
        .required("O campo é obrigatório")
        .min(5, "O campo deve ter, no mínimo, 5 caracteres"),
    }),
  });

  return (
    <>
      <Form>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <span>{formik.errors.name}</span>
        ) : null}
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
        <div>
          <Label htmlFor="phone">Telefone</Label>
          <span>Opcional</span>
        </div>
        <Input
          id="phone"
          name="phone"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <span>{formik.errors.phone}</span>
        ) : null}
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <span>{formik.errors.message}</span>
        ) : null}
        <Button type="submit">ENVIAR</Button>
      </Form>
    </>
  );
}
