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
	<meta name="description" content="Stranica za radove interijera i keramike." />
</svelte:head>
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
              class={`absolute h-0.5 w-5 bg-textcol transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 bg-textcol transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 w-5 bg-textcol transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

    <nav
        class={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-textcol text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
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

		<slot />


<style lang="postcss">
  :global(body) {
    @apply bg-background;
    @apply text-textcol;
  }
</style>
