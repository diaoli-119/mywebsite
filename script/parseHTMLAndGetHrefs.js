

async function parseHTMLAndGetHrefs(url = 'https://eksvideo.com/videos/') {
  try {
    const response = await axios.get(url);
    const html = response.data;
  
    const $ = cheerio.load(html);
  
    const hrefValues = [];
    $('td[data-sort] a').each((index, element) => {
      const hrefValue = $(element).attr('href');
      const cleanHref = hrefValue.replace('/videos/', '');
      if (cleanHref) {
        hrefValues.push(cleanHref);
      }
    });
  
    return hrefValues;
  } catch (error) {
    console.error('Error fetching or parsing the HTML:', error.message);
    return [];
  }
}