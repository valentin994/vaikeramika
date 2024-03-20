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
    <nav class="text-textcol bg-red-500 hover:bg-red-800 px-4 py-2">
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
        class={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul class="flex flex-col items-center w-full justify-center align-middle text-center">
          <li class="text-2xl p-4">
            <a
              href="/"
            >
              Home
            </a>
          </li>
          <li class="text-2xl p-4">
            <a
              href="/apartments"
              class="nav-link"
            >
              Apartments
            </a>
          </li>
          <li class="text-2xl p-4">
            <a
              href="/region"
              class="nav-link"
            >
              Region
            </a>
          </li>
          <li class="text-2xl p-4">
            <a
              href="/contact"
              class="nav-link"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      </nav>

		<slot />
<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
	<nav class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/">Pocetna</a>
		<a class="link link-hover" href="/about">O nama</a>
		<a class="link link-hover" href="/gallery">Galerija</a>
		<a class="link link-hover" href="/contact">Kontakt</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
					></path></svg
				></a
			>
			<a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					></path></svg
				></a
			>
			<a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					></path></svg
				></a
			>
		</div>
	</nav>
	<aside>
		<p>Copyright © 2024 - All right reserved by VAI Keramika</p>
	</aside>
</footer>

