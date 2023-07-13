import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[300px]" id="contact">
      <div className=""></div>
      <hr />
      <div className="flex flex-col items-center my-8">
        <p>© 2023 Pure Nature Learning. All rights reserved.</p>
        <p>
          Powered by{" "}
          <Link href={"https://poh.netlify.app/"}>
            <span className="text-slate-500">Poh.</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
