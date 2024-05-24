
import { useForm } from "react-hook-form"
import axios from 'axios';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    axios.post("http://localhost:3000/users",data)
}
const convertToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setImage(reader.result)
    }
}
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input type="file" onInput={(e)=> convertToBase64(e.target.files[0])} />
      <h2>ADD</h2>
      <input  {...register("name")} />
      {errors.cost && <span>This field is required</span>}
      <input {...register("cost", { required: true })} />
      {errors.cost && <span>This field is required</span>}
      <input type="submit" className="btn1" value="submit" />
    </form>
  )
}