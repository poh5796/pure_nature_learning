import PageWrapper from "../page-wrapper";

export default function Page() {
  return (
    <>
      <PageWrapper>
        <div className="px-[10vw] md:px-[15vw] py-[5vh]">
          <section className="flex flex-col sm:flex-row">
            <div className="flex justify-center">
              <div className="portrait">
                <span className="hidden">
                  Inspired by https://stefantopalovicdev.vercel.app/
                </span>
              </div>
            </div>

            <div className="px-8 flex flex-col justify-center">
              <p className="py-4 text-2xl font-black">About Us</p>
              <p className="text-base text-neutral-600 text-justify font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                minima, et fuga ipsa dolorem sapiente eligendi minus officiis
                quod doloribus distinctio impedit, dolore dignissimos deserunt a
                facilis harum hic dolorum?
              </p>
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
