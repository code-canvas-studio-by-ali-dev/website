import BackgroundVideo from "@/components/videos";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>

      <section className="flex flex-col justify-between h-screen">
        <section>
          <header className="lg:my-5 lg:mx-11 py-5">
            <nav className="flex justify-between items-center">
              <h1>Logo</h1>
              <div>Icon</div>
            </nav>
          </header>

          <section className="absolute top-0 borde h-screen w-full">
            <BackgroundVideo
              videos={[
                "/videos/video_1.mp4",
                "/videos/video_2.mp4",
                "/videos/video_3.mp4",
                "/videos/video_4.mp4",
                "/videos/video_5.mp4",
                "/videos/video_6.mp4",
                "/videos/video_7.mp4",
              ]}
              interval={7900}
            />
          </section>

          <section className="flex flex-col justify-center items-center">
            <h1 className="flex flex-col justify-center items-center w-fit">
              <span className="uppercase text-7xl sm:text-8xl md:text-10xl lg:text-14xl xl:text-22xl">Pakistan</span>
              <span className="flex justify-between items-center uppercase text-2xl md:text-3xl w-full px-0.5 sm:px-1 md:px-2 lg:px-3 xl:px-7 xl:-mt-7">
                <span>Artificial Intelligence</span>
                <span>Laboratory</span>
              </span>
            </h1>
          </section>
        </section>
        <footer className="flex justify-between items-center lg:my-5 lg:mx-11">
          <p>&copy; {new Date().getFullYear()}</p>
          <p>All rights reserved</p>
        </footer>
      </section>

    </Fragment>
  );
}
