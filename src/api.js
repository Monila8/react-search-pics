import photosService from "./services/photosService"

const searchImages = async (term) => {
  try {
    const response = await photosService.get("/search/photos", {
      params: {
        query: term,
      },
    })

    return response.data.results
  } catch (err) {
    console.log(err)
    return []
  }
}

export default searchImages
