import { RunnableLambda } from '@langchain/core/runnables';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

const loadPDF = new RunnableLambda({
  async func(file) {
    const loader = new PDFLoader(file, { splitPages: false });
    const docs = await loader.load();
    return docs[0];
  },
});

const data = await loadPDF.invoke('../files/Node.pdf');
console.log(data);
