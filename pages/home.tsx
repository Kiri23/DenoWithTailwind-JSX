import Layout from "../components/layout.tsx";
import Button from "../components/button.tsx";

export default function () {
  return (
    <Layout title="Hello">
      <h1 className="text-3xl m-6">Hello world</h1>
      <Button>
        Useless button
      </Button>
    </Layout>
  );
}