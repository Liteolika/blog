import siteData from "@/sitedata";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  return {
    title: `${siteData.title} - Articles`,
  };
}

export default function Articles() {
  return (
    <div>
      <h2>Articles</h2>
      <p className="mb-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        eligendi ratione deserunt quaerat minus ipsum, accusantium at
        consequatur accusamus beatae, expedita alias distinctio molestiae sed
        sint assumenda sequi voluptatem illo!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        fugiat, incidunt ex, architecto labore a perferendis rem possimus
        eligendi natus eum consectetur voluptatum unde modi totam. Ab nam
        molestiae unde.
      </p>
    </div>
  );
}
