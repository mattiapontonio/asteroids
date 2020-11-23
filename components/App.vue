<template>
  <body id="app" class="app">
  <button onclick="history.back()">back</button>
  <button onclick="history.forward()">forward</button>
    <h1>Asteroids</h1>
    <main
      <nav class="menu">
        <ul>
          <li>
            <NuxtLink to="/asteroids-of-the-day">asteroids-of-the-day</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/brightest of-the-week">brightest of-the-week</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/astronomy-picture-of-the-day">astronomy-picture-of-the-day</NuxtLink>
          </li>
        </ul>
      </nav>
    </main>
    <footer>
        <table>
            <tbody>
                <tr>
                    <td>GitHub</td>
                    <td><a href="https://github.com/mattiapontonio/asteroids">https://github.com/mattiapontonio/asteroids</a></td>
                </tr>
                <tr>
                    <td>Version</td>
                    <td>{{version}}</td>
                </tr>
                <tr>
                    <td>
                      <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </td>
                </tr>
            </tbody>
        </table>
      </footer>
  </body>
</template>
<script>
  import Vue from 'vue';
  import format from '../formatDate.js';
  import {
    version
  } from '../package.json';
  export default {
    name: 'app',
    computed: {
      version: function () {
        return version;
      }
    },
    props: [
      "date",
      "start_date",
      "end_date",
      "api_key"
    ]
  }

</script>
