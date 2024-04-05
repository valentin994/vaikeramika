<script>
  import { fade, fly } from "svelte/transition";	
  import { tweened } from 'svelte/motion';
  import { backOut } from 'svelte/easing';
  let reviews = [
      { "id": 1, "name": "Marija", "review": "Imao sam izvanredno iskustvo s ovim keramičarom. Bio je iznimno profesionalan i pažljiv u svakom koraku procesa. Kvaliteta njegovog rada je izvanredna, a cijena je bila vrlo razumna. Toplo preporučujem ovog keramičara svakome tko traži kvalitetan rad po pristupačnoj cijeni." },
      { "id": 2, "name": "Valentin", "review": "Imao sam izvanredno iskustvo s ovim keramičarom. Bio je iznimno profesionalan i pažljiv u svakom koraku procesa. Kvaliteta njegovog rada je izvanredna, a cijena je bila vrlo razumna. Toplo preporučujem ovog keramičara svakome tko traži kvalitetan rad po pristupačnoj cijeni." },
      { "id": 3, "name": "Ivan", "review": "Ovaj keramičar je bio izuzetno profesionalan u svom radu. Njegova pažnja na detalje je nevjerojatna, a kvaliteta završnog proizvoda je izvanredna. Također, cijenim njegovu sposobnost da bude fleksibilan i prilagodljiv prema potrebama klijenta. Definitivno bih ga ponovno angažirao." },
  ];
  let num = 2;
  const changeReviewNum = () => {
    if (num === 2){
        num = 0;
        return;
    }
    num++;

  }
	let width = 0
	let tweenedWidth = tweened(0,{
		duration: 500,
		easing: backOut
	})
    /**
	 * @type {number | undefined}
	 */
    let clear;
	$: {
		tweenedWidth.set(width)
        clearInterval(clear)
	    clear = setInterval(changeReviewNum, 5000)
	}
</script>
<h1 class="p-4 text-xl text-center">Nudimo širok spektar usluga, od jednostavnog postavljanja podnih pločica do složenih zidnih obloga i dekoracija.</h1>
<div class="p-4 px-8">
    <img class="border border-gray-300 shadow-md rounded-md" src="./about_image.avif" alt="White tile laying" />
    <div class="flex">
            <div class="relative inline-flex align-middle items-center justify-center w-full">
                {#key num}
                    <h1 in:fly={{y: 50,duration: 500}} out:fly={{y:-50,duration: 500}}  bind:clientHeight={width} class="text-center text-secondary pt-8 italic text-xl absolute">"{reviews[num]["review"]}" <span class="text-textcol text-sm italic">{reviews[num]["name"]}</span></h1>
                {/key}

		    <div class="h-72" />
            </div>
    </div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full md:grid-row-1 px-4 md:px-24">
    <div class="flex border border-gray-300 rounded-md shadow-md w-full p-4 py-8 my-4 justify-between items-center bg-gray-300 bg-opacity-25">
        <img alt="House" src="./house2.svg" class="w-16" />
        <h2 class="text-gray-500 p-4">Odradeno vise od 1000 domova. </h2>
    </div>
    <div class="flex border border-gray-300 rounded-md shadow-md p-4 py-8 my-4 justify-between items-center bg-gray-300 bg-opacity-25">
        <img alt="Ruler" src="./ruler3.svg" class="w-16" />
        <h2 class="text-gray-500 p-4">Vise od 10000 m2 nesto nesto</h2>
    </div>
    <div class="flex border border-gray-300 rounded-md shadow-md p-4 py-8 my-4 justify-between items-center bg-gray-300 bg-opacity-25">
        <img alt="Box" src="./kutija.svg" class="w-16" />
        <h2 class="text-gray-500 p-4">Tisuce zadovoljnih klijenata</h2>
    </div>
</div>

