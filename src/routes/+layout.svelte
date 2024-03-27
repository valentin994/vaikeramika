<script>
    import "../app.css";
	import { page } from '$app/stores';
    let isMenuOpen = false;
	/**
	 * @type {string}
	 */
	let href;
	$: href = $page.url.pathname;
</script>

<svelte:head>
	<title>VAI Interijeri i keramika</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="copyright" content="Copyright owner" />
	<meta name="author" content="Valentin Vareskic" />
    <meta name="description" content="Obratite se VAI Keramika i interijeri za vrhunsku uslugu postavljanja pločica u Hrvatskoj. Naši stručnjaci će transformirati vaš prostor u sanjani interijer.">
    <meta name="keywords" content="VAI Keramika i interijeri, pločice, keramika, postavljanje pločica, Hrvatska, interijeri, VAI" />
</svelte:head>

<div class="min-h-screen flex flex-col overflow-y-scroll">

    <nav class="text-textcol px-4 py-2 border-b-2 border-gray-100">
      <div class="flex flex-wrap items-center justify-between mx-auto w-full ">
        <a href="/" class="flex items-center p-4">
          <span class="self-center text-xl font-light whitespace-nowrap">
            VAI Keramika
          </span>
        </a>
        <div class="p-4 hidden md:max-[4200px]:block text-lg">
          <ul class="flex">
            <li class="px-2 hover:text-red-800">
              <a href="/">Pocetna</a>
            </li>
            <li class="px-2 hover:text-gray-200">
              <a href="/about">O nama</a>
            </li>
            <li class="px-2 hover:text-gray-200">
              <a href="/gallery">Galerija</a>
            </li>
            <li class="px-2 hover:text-gray-200">
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </div>
        <button
          class="md:hidden m-4 flex top-0 right-0 z-20 relative w-10 h-10 text-textcol focus:outline-none"
          on:click={()=> isMenuOpen = !isMenuOpen}
        >
          <div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              class={`absolute h-0.5 w-5 bg-[#434343] transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 bg-[#FDFDFD] delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 bg-textcol transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 w-5 bg-[#434343] transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 bg-[#FDFDFD] delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

    <nav
        class={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-primary text-background bg-opacity-100 transform delay-100 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul class="flex flex-col items-center w-full justify-center align-middle text-center">
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/"
            >
              Pocetna
            </a>
          </li>
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/about"
              class="nav-link"
            >
              O nama
            </a>
          </li>
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/gallery"
              class="nav-link"
            >
              Galerija
            </a>
          </li>
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/contact"
              class="nav-link"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
      </nav>
        <div class="flex-grow bg-background">
		  <slot />
        </div>
    <footer class="bg-white p-2 border-t-2 border-gray-100 text-gray-500 text-md">
        <div class="flex flex-row justify-between">
            <div class="flex flex-col p-2 text-start">
                <a class="p-1" href="/">Pocetna</a>
                <a class="p-1" href="/about">O nama</a>
                <a class="p-1" href="/gallery">Galerija</a>
                <a class="p-1" href="/contact">Kontakt</a>
            </div>
            <div class="p-2 text-end">
                <p class="p-1">VAI Interijeri i keramika</p>
                <p class="p-1">Ivica Vareskic</p>
                <p class="p-1">+385 98 311 585</p>
                <p class="p-1">75973836834</p>
            </div> 
        </div>
        <hr class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-textcol to-transparent opacity-25" />
        <div class="p-2 text-center">
            <p class="text-xs">© VAI Keramika i interijeri, sva prava pridrzana</p> 
            <p class="text-xs">created by Valentin Vareskic</p>
        </div>
    </footer>
</div>

<style lang="postcss">
  :global(body) {
    @apply bg-background;
    @apply text-textcol;
  }
</style>

