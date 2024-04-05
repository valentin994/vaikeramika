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

<div class="min-h-screen flex flex-col">

    <nav class="text-textcol px-4 py-2 ">
      <div class="flex flex-wrap items-center justify-between mx-auto w-full ">
        <a href="/" class="flex items-center p-4">
          <img class="max-w-24" alt="Logo" src="./vai_logo.svg" />
        </a>
        <div class="p-4 hidden md:max-[4200px]:block text-lg">
          <ul class="flex">
            <li class="px-2 hover:text-secondary">
              <a href="/">Pocetna</a>
            </li>
            <li class="px-2 hover:text-secondary">
              <a href="/about">O nama</a>
            </li>
            <li class="px-2 hover:text-secondary">
              <a href="/gallery">Galerija</a>
            </li>
            <li class="px-2 hover:text-secondary">
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </div>
        <button
          name="Contact call to action"
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
        class={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-secondary text-background bg-opacity-100 transform delay-100 transition-all duration-300 overscroll-auto ${
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
    <footer class="p-2 mt-4 border-t border-gray-300 text-textcol text-md md:px-20 lg:px-52 md:text-g mg-gray-300 bg-gray-300 bg-opacity-25">
        <div class="flex flex-row justify-between my-4 md:my-12">
            <div class="flex flex-col p-2 text-start ">
                <div class="p-2 content-center">
                    <a class="hover:text-gray-500" href="/">Pocetna</a>
                </div>
                <div class="p-2 content-center">
                    <a class="hover:text-gray-500" href="/about">O nama</a>
                </div>
                <div class="p-2 content-center">
                    <a class="hover:text-gray-500" href="/gallery">Galerija</a>
                </div>
                <div class="p-2 content-center">
                    <a class="hover:text-gray-500" href="/contact">Kontakt</a>
                </div>


            </div>
            <div class="p-2 text-end">
                <p class="p-2">VAI Interijeri i keramika</p>
                <p class="p-2">Ivica Vareskic</p>
                <p class="p-2">+385 98 311 585</p>
                <p class="p-2">75973836834</p>
            </div> 
        </div>
        <hr class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-textcol to-transparent opacity-25" />
        <div class="p-2 text-center">
            <p class="text-xs">© VAI Keramika i interijeri, sva prava pridrzana</p> 
            <p class="text-xs">created by <a href="https://github.com/valentin994" target="_blank">Valentin Vareskic</a></p>
        </div>
    </footer>
</div>

<style lang="postcss">
  :global(body) {
    @apply bg-background;
    @apply text-textcol;
  }
</style>

