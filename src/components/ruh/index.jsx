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
    <div>
      {/* <h1>create new product</h1> */}
      <form onSubmit={handleSubmit(ruyUtish)}>
        <input type="text" placeholder="Nomi" {...register("nomi")} />
        <input type="text" placeholder="Narxi" {...register("narxi")} />
        <input type="text" placeholder="Qanaqa turda" {...register("rangi")} />
        <button>Junatish</button>
      </form>
    </div>
  );
}
