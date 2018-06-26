module.exports = {
  getDeveloperById: function(id) {
    var developers = this.getAllDevelopers();

    var developersWithId = developers.filter(function(developer) {
      return (developer.id === id);
    })

    var developer =  developersWithId[0];

    if (developer === undefined) {
      return {
        name: 'Nobody',
        favoriteLanguage: 'Nothing',
        gender: 'Neither'
      }
    } else {
      return developer;
    }
  },

  getAllDevelopers: function() {
    return [
      {
        id: 'ryan',
        name: 'Ryan Haskell-Glatz',
        favoriteLanguage: 'Elm',
        gender: 'male',
        image: 'https://onenorth.blob.core.windows.net/keystone/Keegan-Bowers_BW.jpg'
      },
      {
        id: 'erik',
        name: 'Erik Carron',
        favoriteLanguage: 'Elm',
        gender: 'male',
        image: 'https://onenorth.blob.core.windows.net/keystone/Kyle-Mattimore_BW_Cropped.jpg'
      },
      {
        id: 'emma',
        name: 'Emma Birdsong',
        favoriteLanguage: 'C#',
        gender: 'female',
        image: 'https://onenorth.blob.core.windows.net/keystone/Jackie-Huey_bw_cropped.jpg'
      }
    ];
  }
}
