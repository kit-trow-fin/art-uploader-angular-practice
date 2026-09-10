import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ArtworksService {
    private artworks: Artwork[] = [
        {
            ImgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/J._W._Waterhouse_-_Circe_Invidiosa_-_Google_Art_Project.jpg/960px-J._W._Waterhouse_-_Circe_Invidiosa_-_Google_Art_Project.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            Title: "Circe Invidiosa",
            ArtistName: "John William Waterhouse",
            YearCompleted: "1892",
            Movement: "Pre-Raphaelite",
            Collection: "Art Gallery of South Australia",
            Location: "Adelaide",
            Seen: false
        },
        {
            ImgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Millais_Order_of_Release.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
            Title: "The Order of Release, 1746",
            ArtistName: "John Everett Millais",
            YearCompleted: "1853",
            Movement: "Pre-Raphaelite",
            Collection: "Tate Britain",
            Location: "London",
            Seen: false
        },
        {
            ImgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg/1920px-Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
            Title: "Annunciation",
            ArtistName: "Leonardo da Vinci",
            YearCompleted: "1476",
            Movement: "Renaissance",
            Collection: "Uffizi",
            Location: "Florence",
            Seen: true
        },
        {
            ImgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Pieter_Bruegel_the_Elder_-_The_Fall_of_the_Rebel_Angels_-_RMFAB_584_%28derivative_work%29.jpg/960px-Pieter_Bruegel_the_Elder_-_The_Fall_of_the_Rebel_Angels_-_RMFAB_584_%28derivative_work%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            Title: "The Fall of the Rebel Angels",
            ArtistName: "Pieter Bruegel the Elder",
            Movement: "Dutch and Flemish Renaissance",
            YearCompleted: "1562",
            Collection: "Royal Museums of Fine Arts of Belgium",
            Location: "Brussels",
            Seen: true
        },
        {
            ImgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg/960px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            Title: "Lady with an Ermine",
            ArtistName: "Leonardo da Vinci",
            Movement: "Renaissance",
            YearCompleted: "1491",
            Collection: "Czartoryski Museum",
            Location: "Kraków",
            Seen: false
        },
    ]
}