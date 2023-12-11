type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const response = await fetch(
    `http://localhost:3000/api/events/${params.slug}`
  );
  return <main>Event page</main>;
}
