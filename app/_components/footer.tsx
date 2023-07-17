import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="h-[250px] px-8 py-4 flex flex-col justify-around border text-sm text-neutral-600 bg-neutral-50"
      id="contact"
    >
      <div className="flex justify-center">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae non
          amet nobis laboriosam minima iste dolor aliquam ducimus asperiores at?
          Porro pariatur quia possimus incidunt maxime sapiente mollitia fugiat
          assumenda!
        </p>
      </div>

      <hr />

      <div className="flex flex-col items-center">
        <p>© 2023 Pure Nature Learning. All rights reserved.</p>
        <p>
          Powered by&nbsp;
          <Link href={"https://poh.netlify.app/"}>
            <span className="text-neutral-800 font-medium">Poh.</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
