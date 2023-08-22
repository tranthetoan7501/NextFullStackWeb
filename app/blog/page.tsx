import Image from "next/image";
export default function Blog() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src="/image1.jpg" alt="Shoes" width={400} height={60} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            New Post
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
}
