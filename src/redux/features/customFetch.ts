const baseUrl = "https://register.free.beeceptor.com/";

const PostDataQuery = async () => {
  const url = `${baseUrl}`;
  let object = {
    method: "POST",
  };

  let res = await fetch(url, object);
  let json = await res.text();
  return json;
};

export { PostDataQuery };
