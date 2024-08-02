import { useForm } from "react-hook-form";
import { url } from "../../utils/axios";
import { toast } from "react-toastify";
export default function RuyUtish() {
  const { register, handleSubmit, reset } = useForm();

  const ruyUtish = (data) => {
    url.post("/products", data).then((res) => {
      reset();
      toast.success("product created !");
    });
  };
  return (
    // <h1>create new product</h1>
    <>
      <div className="mx-auto my-0">
        <form onSubmit={handleSubmit(ruyUtish)} >
          <input className="" type="text" placeholder="Nomi" {...register("nomi")} /> <br />
          <input className="" type="text" placeholder="Narxi $" {...register("narxi")} /> <br />
          <input className="" type="text" placeholder="Qanaqa turda" {...register("rangi")} /> <br />
          <button className="border-black">Junatish</button>
        </form>
      </div>
    </>
  );
}
