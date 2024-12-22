async function tempo(request, response) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();

  const subscribersResponse = await fetch(
    "https://api.kit.com/v4/subscribers?api_secret=${apiSecret}"
  );
  const subscribersResponseJson = await subscribersResponse.json();
  const inscritos = subscribersResponseJson.total_subscribers;

  response.setHeader("Cache-Control", "s-maxage=60, state-while-revalidate");

  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos,
  });
}

export default tempo;
