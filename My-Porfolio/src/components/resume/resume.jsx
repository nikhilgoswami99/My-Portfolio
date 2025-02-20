import styles from "./resume.module.css";
import resume from "../../assets/Nikhil Goswami.jpg";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  return (
    <>

    <section className={styles.pdf_container}>
    {/* <Document file={resume} className={styles.size}>
        <Page pageNumber={1} height={800} width={800} />
      </Document> */}
      <img src={resume} alt="" className={styles.size} />
    </section>
      
    </>
  );
}

export default Resume;
