<script setup>
import { ref } from "vue";

let peoples = ref([
    'Alex','John',"Leang"
])
let books = ref([
    {id:1,

  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publication_year: 1960,
  genre: ["Fiction", "Southern Gothic"],
  summary: "The story takes place in the fictional town of Maycomb, Alabama, and is narrated by a young girl named Scout Finch. It explores themes of racial injustice and the loss of innocence.",
  rating: 4.8
},
{
 id:2,
    title: "1984",
  author: "George Orwell",
  publication_year: 1949,
  genre: ["Dystopian", "Political fiction"],
  summary: "Set in a totalitarian society ruled by the Party led by Big Brother, the novel follows the life of Winston Smith as he struggles against the oppressive regime.",
  rating: 4.6
},
{
 id:3,
    title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publication_year: 1925,
  genre: ["Fiction", "Tragedy"],
  summary: "Set in the Jazz Age on Long Island, the story depicts the extravagant and decadent lives of Jay Gatsby and Daisy Buchanan, exploring themes of love, wealth, and the American Dream.",
  rating: 4.5
},
{
 id:4,
    title: "Pride and Prejudice",
  author: "Jane Austen",
  publication_year: 1813,
  genre: ["Romance", "Satire"],
  summary: "The novel follows the romantic entanglements of the Bennet sisters, particularly Elizabeth Bennet, as they navigate societal expectations and search for love.",
  rating: 4.7
},
{
 id:5,
    title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  publication_year: 1997,
  genre: ["Fantasy", "Young adult fiction"],
  summary: "The first book in the Harry Potter series introduces the young wizard Harry Potter and his adventures at Hogwarts School of Witchcraft and Wizardry.",
  rating: 4.9
}

])
</script>

<template>
    <!-- <p v-for="(pesron,index) in peoples" :key="index">{{pesron}}</p>
    <br> -->
    <!-- <hr> -->
    <ol v-for="(book,index) in books" :key="index">
        <li>{{book.title}}</li>
        <li>{{book.author}}</li>
        <li>{{book.publication_year}}</li>
        <!-- this is how we join array -->
        <li >{{ book.genre.join(', ') }}</li>
        <li>{{book.summary}}</li>
        <li>{{book.rating}}</li>
        <br>
    </ol>
</template>