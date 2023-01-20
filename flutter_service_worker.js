'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "101dbd5743434cb40ec1fdb8241d03e0",
"index.html": "0fe0662e9236e1a2b240fe522789aa7f",
"/": "0fe0662e9236e1a2b240fe522789aa7f",
"main.dart.js": "4b0dda88bbf0322c11cf849ef31332c0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"cors.json": "a0b74ecfb5b0504aaa095f6296578412",
"favicon.png": "33f006afb9fec7b0effb45dc816ae633",
"icons/Icon-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-512.png": "97c7dc428a99350aba82964372883671",
"icons/Icon-512.png": "97c7dc428a99350aba82964372883671",
"manifest.json": "0a1807dbc8ed1bd4743de7c12602be8c",
".git/config": "87cd9983850ed58dda7bb2ad49b11541",
".git/objects/61/0f9faa62bedd66616f404e28fe07fd2f436a89": "eefd899e1136fde977c92acb8ebf4dd5",
".git/objects/66/0b149a18c3431a2a07b96000947c519c2bc946": "50fde9a5429950b2666d3db81b3cf519",
".git/objects/3e/23390a7db9d0e1150497e9ab507cfc4d307671": "e1d6953b4bc24929fa73826a22daf2ba",
".git/objects/3e/f5d8b1fc5de90bd9fbd5cba4670df24fe3ada6": "5785f06806e7ceb1b487521b3ca5f0a7",
".git/objects/9b/646c4a811f9db3d2798ef3f43df83060d40f7e": "f04e38bdd9a4b4234c4b8684390dc60f",
".git/objects/9b/9414b46e9343afe9641189e8c7791123e74563": "a71b352648d9370e0dacc6fac3f40614",
".git/objects/9e/6f5f13344eb96c1601d0c8df93dd178558137e": "a024022a1c595c4002c1b9173e0ce322",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/94/3973f0545b9fa6497d47ee4a5b2015b10423ca": "44b9b5d44e6ad6d3b08821ba490f9409",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/5a/452ac4c64d5d3f04ea66fd9abaaf1b1603f6c6": "f8d5133a6e1b29412df63b8d142c54d2",
".git/objects/5f/e5ecd6be1c59c9e1743eed35bf1c91be381e6c": "9a9afd2ad00209ffe545b5c2dbbfc63f",
".git/objects/a3/3b57f01fba2eda81073530d52c62240a578584": "97a0d3cd96b999961cfe1a8ea232d14b",
".git/objects/a3/82bfa5436935af59283e1707946b6eca41c890": "9ff246c08a103c5e529bfe20b2d92ffa",
".git/objects/b3/60b731b0e5680288ec928d8d1ab0601cdd27d6": "57d9039eddc80a8dcd566b41b10d3398",
".git/objects/df/f3d47ec205553da30e2d1b7f6af3160f9bd6cc": "89f9fa22d3a914e828941a8c08138e49",
".git/objects/da/86ec9bcf01cac5fbaefc57e7e7fd0b358c19b4": "57a0ec50b660e8d58fc6a26230526a34",
".git/objects/a2/bced3fae0d9bbe1b8bd0b4c64fac3fa5c030f5": "e6a930b927b1efac14fd8dca42e170b1",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/bc/b795e56ddda712aa9e4e01f0ffc4e1e7ec2eff": "de8bee002f9a2df351756400a50f501b",
".git/objects/bc/ec2238d088c7d2ace3cbfc4dde94fb098236ec": "bee47f2bf6d1264a2c941f81456088f5",
".git/objects/e5/e7647722dc6a49ba17fb1356000a3c796c66ce": "ac53cb27bba308ebdee998f47dfc7978",
".git/objects/e5/1b2d5ef47d0cf39d00be0e6c1ed4d83c6668a7": "abe08acbd6269135b82f4b5c3b2aaf89",
".git/objects/fc/29a13818ecfc1e4e69eb0caa11f377c2fb8418": "7781d0adf7c13679427a280b45647359",
".git/objects/ca/6293dff9c6f7bf5d71262b5c39c189fa5915f2": "6bebbe4752467c8be8e3f5eb45395d47",
".git/objects/ca/1e01079a8762f1d116c09bf79f896e11180352": "58458c742a7a2a97ca8fb72862385dd5",
".git/objects/fe/c2270810bc6ea92f3f30a9e8fc6c03bb980149": "8dbfbe38b9b5595b71cce3e3635d6b3f",
".git/objects/c1/5a098d13edf55cf992e7227bc6c5ee0ae4a0d6": "de8f180a3340dfc9754bd1fecf86320d",
".git/objects/pack/pack-1652629277b9a0639070138503b610a87437d959.pack": "a2a8b1a5673ac2280c8759e04a1b5a1c",
".git/objects/pack/pack-1652629277b9a0639070138503b610a87437d959.idx": "5be4f2e833aff17ea31564bd2c2939a2",
".git/objects/74/ce909d588b2759e281502ec10409f61a220afa": "2a362755291f60b7b1e9e5992a65741d",
".git/objects/1a/885388a893323b28e1f84496f354b9c4f76b29": "0feceb888c93f764184cef3bb8329eb3",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/17/853d8869af4207f286185f351a03f98e561d05": "a2010a86568597ddd2ba78c486a653c5",
".git/objects/8a/2cd86180876e608c99f2be1006c51f5e2a5537": "ef5af7dea8d17a6c1ae4933737c60f31",
".git/objects/8a/2ce066a6f63418a5fb394be6cf3176a3a2ffc4": "dd67d9a37a2b8b075f76a7a4c67aee0f",
".git/objects/10/906443094cf05af25c8a3eaa4125c22c1d3ea1": "e1f8ad295f78a72a1d3051e123826a78",
".git/objects/21/2224d231ffdbba5a0ec72930965de4cd8df11f": "5ac1977b9076df6d8fd1fceebfb03ed7",
".git/objects/4d/ebd5d50a0d0de7e2df16faec7e76a336a4763a": "e5aa0c1f419c76562f7a7e722fc0d549",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/86/dbcf0393c7e5397edd808238c2b1b4c8aa4374": "8ca426fd3922e09d7556b77eca0a7616",
".git/objects/2a/fe374352058c1569a0c340ebe5d11409c25e95": "6446cda52cf69a765c8531e32180458a",
".git/objects/43/65fe33693ca29583e99679c936494cb3ca401f": "b887960cf18d2dc1bade93086b289527",
".git/objects/38/94844ee99d8af546b46dd8becaa79823434680": "9fd7efc7c4ec587b07e469d06e06f139",
".git/objects/38/89058fdcb8f8bd072e777dcd07d3cfcac65f9e": "8e9d056ef26ca2d4e966d568d50fc158",
".git/objects/9a/b849722ea1470dd4f98424db7df2ca76d3ede0": "ef07cb2a135a9d36ec01bdb9c918e136",
".git/objects/9a/7669df89fa512c9f7621fc249ba8e0eeeac6ce": "50fa42f4f9ef7e5d9ad196e6e29a7f2b",
".git/objects/5c/40fadb4ba90e596f253631696952bae0338547": "16e12d4d0dac3398296504d886ba40a6",
".git/objects/5c/7b318b729940a8a01c02677e4a46a5f4e97652": "5f067e8f97d07bc7ce26e9c062262a61",
".git/objects/5d/f8980fa04f3ba759491a64c013323ce0084691": "b38f92c8fbcada508d6f62202ca49e8c",
".git/objects/5d/9bbfe251a277b0024dfcc77cc379e68cab0b2e": "2d340248d83853384f7044ec69b25eb1",
".git/objects/91/4b378996e8b1b82950e08c139332af92e59dfd": "d75d51932eed2d1c811e506b0c07bae3",
".git/objects/96/fc92f2fb0de25edc889f7a265c4470581f1188": "49756c1118db88756ebf2007d6a36c96",
".git/objects/3a/1efabc7ae0f29f939f9589d5027cde8f56ad33": "0fd3dbc49445144203a24c3525223e0a",
".git/objects/53/98b729f72e8f8f0890e6193ec54b8a466b0fae": "4271381e61df105e611e886b88704e22",
".git/objects/3f/a5d794e131245ef2d24667055f0b61f15720f2": "0fe436e99c9a85660db87020d8312a23",
".git/objects/5e/f5db749954e918bf5dc0bbbe08b16074c3ba97": "ba4e957fcb3812bd36bdd4f2c78ba2cb",
".git/objects/5b/da3fbec49a7b0aad0027da8a73d31d52e748d7": "ee11d9abac860a217c7f9a7e512082a5",
".git/objects/08/d0a328fe756b3eac7ef0ec9d8aaf61caacd10e": "15e840d785c7387f0842795db71b674b",
".git/objects/55/182adf0d0bf210d229be9935f00ff464450da1": "156d351b23d4eddf5eec5566e8e85b5e",
".git/objects/55/15ff8833c8233fe01396844af9ba1a8c0a125f": "cf2cc54a0b2d6967639d4da4474f16e6",
".git/objects/97/a582aeb42a94439ab7bac9a19994f95a239ff5": "ba69631203f22ab511b7f8b073c59e3d",
".git/objects/64/78e425c2df5ba99f71a425a260413231ece78d": "8c72ac548aa677beb5cc46edf11ea270",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/b6/ea34a18c9674c95c2b3c8058a02b248f38fb11": "e92f6c864b9fb0897e64da59bfaa9040",
".git/objects/db/1368106fba88f69daa4688c0c05a324be9c1ca": "5347940091eefe9afe5de8f370c6d750",
".git/objects/a8/e3c33eca953e635cdf25d3157d94429b625009": "6377f8eb9978f51c3d8d1d71e5fba406",
".git/objects/ef/a3ae39ff2b393ca0a3226a793b809c51849d2a": "0b5d2918afbf4207ebe28f9c6b609a57",
".git/objects/c4/feb4e62dbc9649406b5e3e6d2c36f695072172": "be0e4615ffe3b10c7758ab259e74d29e",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/79/905243941ff170afe7f8721649b691469400b5": "f318e4a6dc7cce9f64d1c6ec6267b8ad",
".git/objects/83/29f5b0f787ff6ffd5d5f321a3c9161db5c3350": "880b64e380a99bc0cdfd55e1c97b2454",
".git/objects/70/1c8e61773c76369f8e1f03e381a685e8805e69": "a1f00fc0cecaa22caef1fc6988f7d4e3",
".git/objects/84/d530f30e5caf178d68c11aecd340268598dc46": "079b085cdbb2f923171d233da3dc430d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/76c305c2b3ee9e68f7059b12a5502faecc16d6": "c0cf25f494cefe872f9e72ae176af9d1",
".git/objects/1d/54208be4b61f79c0bf2bc614681a4a6dd20bb9": "4b7c4e4500f34d2b96193421f215ddef",
".git/objects/76/0b62341a5d0c8169969198fc5a466ac2bca4fd": "312ccfc5feedf20e986a6e71180cb26d",
".git/objects/82/f9524f7120915d6f9d16aa82eabe044da68ed9": "2eeb4505ce9ea1302afa8c7f507bb0aa",
".git/objects/82/6062fe2b1cc37a5b776440f6e28312f1f2ecf2": "51840b7acb8c878abbff43c29d898b5d",
".git/objects/40/cf01ae620e7aed1f322cb0e1b1f1c3181f9db8": "9f8ec37e51766a4a006b3b2cc4fcf4a3",
".git/objects/8b/9ab404011373cd5b83fc9c35e13d83508faf24": "04dee2929f301db1376f64e09a3524d7",
".git/objects/13/3e982970f6f807c0aa1c02f6267f75f423786a": "9f2fe3a80fbf5361e1d3f4efeab0b8bb",
".git/objects/7f/6549636d80b4c4542015930dbaea08863119a4": "2bcef99234458a7a53f25c97c7e43ed2",
".git/objects/14/7342628d325336a296b570e8aafa64dd9add84": "c3d3bcf2102c10c937d3fb103d183140",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83a1b33422cdfc34ca6de1796a0e4dce",
".git/logs/refs/heads/main": "83a1b33422cdfc34ca6de1796a0e4dce",
".git/logs/refs/remotes/origin/HEAD": "bbad96ff63db153afc6727a3e78f993b",
".git/logs/refs/remotes/origin/main": "fa19482a3dd1bea17af6ca32a4353cc8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b33c2aae0dc99c708973c61dfc513795",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b33c2aae0dc99c708973c61dfc513795",
".git/index": "b2558157a3a930dc7a20d95e11a51768",
".git/packed-refs": "d3f464de318984fec1b7aa82befc1a1a",
".git/COMMIT_EDITMSG": "d1e6e3a191f4c73d4b7970510877b63d",
"assets/AssetManifest.json": "01eb68e15525c7119d52f9a36a856070",
"assets/NOTICES": "7400871caf96503eb5e816d0fce945da",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/shaders/ink_sparkle.frag": "87886eaac04ea6e4d7b46350184e7426",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo-mega.png": "bbe69af413873881b17c5c3acb743dfe",
"assets/assets/images/logo_cf_img.png": "8cb8f25a2e220bb473c83582ef0aa70f",
"assets/assets/images/home-movil/text_super_reco.webp": "6050b83d60579378d4d38a7a85c2d5d6",
"assets/assets/images/home-movil/home_port.png": "216ab6cdbfff748147cdd57cfd0eeebe",
"assets/assets/images/home-movil/home_footer.webp": "d8dee58c800ab2417ea9af6e669359a4",
"assets/assets/images/home-movil/home_port2.webp": "e2c5fc4a5375f9426236ff6c447ac17e",
"assets/assets/images/descrip.png": "fe05ed596dcdb360f15e41734ef74db5",
"assets/assets/images/logo-super.png": "e074f802a0623ba7a2f9bfd7fedecb13",
"assets/assets/images/super_header.webp": "6e4b19d41db3a67d8ad5328b10923b56",
"assets/assets/images/combos/com_001.webp": "3cb41f40dd1dce0ad31bbfbdfc62ca03",
"assets/assets/images/combos/com_002.webp": "b9327f103ed0e413c8bc3031f20ac6ec",
"assets/assets/images/combos/com_003.webp": "507e64cf1143aa8af2e40d942ddf797a",
"assets/assets/images/home-aux.jpeg": "0f298da24e0d8155c801c8c75b30fd5f",
"assets/assets/images/super_footer.webp": "e450f558b3369276dd13bc4951e761a4",
"assets/assets/images/descripRESP.png": "b4ec697fc595cff5652962e0a381ccec",
"assets/assets/images/logo_tipti.webp": "a5774f05963b404914f6e265e85b37fd",
"assets/assets/images/licores/back-ron.png": "77dc36ea745c84c6aaf67db32e8d642c",
"assets/assets/images/licores/back-vt.png": "1d3fdae31a10e53b31edca1c4573ee68",
"assets/assets/images/licores/back-vb.png": "b12b73c091a406162792dd306d923c41",
"assets/assets/images/licores/lic-combo.png": "e878d44d7ca3aade5e3f882add5591b3",
"assets/assets/images/licores/lic-vino-b.png": "e6d3dbc5476c4f9229b51811fd8a1511",
"assets/assets/images/licores/lic-vino-t.png": "e868b7d2ad6002b654565d1575edf655",
"assets/assets/images/licores/lic-espumante.png": "b388d935386313d43b4ed3314566def6",
"assets/assets/images/licores/lic-vino-d.png": "4051267247d7f8ed3d413b9a6379bab8",
"assets/assets/images/licores/lic-whiskey.png": "d1d2c745b5dfb1ffbc27f1fa6277cae6",
"assets/assets/images/licores/lic-vino-r.png": "524127bd3eff19e10410c6a75fd843e2",
"assets/assets/images/licores/back-esp.png": "fe24d8c3b7c2fe94814d838507865a1d",
"assets/assets/images/licores/lic-vino-m.png": "bcd05098a4b6175a58ba1eefb8682ecb",
"assets/assets/images/licores/lic-ron.png": "7ea43c057a105a703c1a1b4dc56a1146",
"assets/assets/images/licores/back-wis.png": "6617eb249661f6eced6ecdf194c5c845",
"assets/assets/images/categorias/svg/cat-vin-tin.webp": "e8561e56800e2efdb425a2113e8695e8",
"assets/assets/images/categorias/svg/cat-wisky.webp": "d140c53c626653231da0c5a053d959cf",
"assets/assets/images/categorias/svg/cat-esp.webp": "16ba89479508f42d8a1a58fd0ddc101f",
"assets/assets/images/categorias/svg/cat-vin-blc.webp": "410026040c565a7fae85daf5cdb997c3",
"assets/assets/images/categorias/svg/cat-coteles.webp": "c53bf42514045fa5347417eec51f3197",
"assets/assets/images/categorias/svg/cat-vin-coc.webp": "1ca141a7046e86f55746d37fd572a3bf",
"assets/assets/images/categorias/svg/cat-ron.webp": "4c98596ad3fd64352443b9cccfb1152b",
"assets/assets/images/categorias/svg/cat-com.webp": "427d49751bdef05c162ecfe9854efee7",
"assets/assets/images/categorias/svg/cat-vin-ros.webp": "c406a6aeebe8b32221e6b745cc539198",
"assets/assets/images/categorias/cat-pro-combos.webp": "3948aba12b1701417bea6c8d22d55684",
"assets/assets/images/categorias/cat-pro-vin-ros.webp": "2871c37eebdc5e9e8cf16e30551bd040",
"assets/assets/images/categorias/cat-pro-wisky.webp": "dcdb96195c2644afcda1b4a75c3515c6",
"assets/assets/images/categorias/cat-pro-vin-coc.webp": "baba6bbb024a8ae68aae576629fcdcf8",
"assets/assets/images/categorias/cat-pro-ron.webp": "b39a192e719dd2cd1211caf436d1d6d4",
"assets/assets/images/categorias/cat-pro-vin-bla.webp": "92a13b10514191aa03f79887d9248fb3",
"assets/assets/images/categorias/cat-pro-vin-tin.webp": "8f19d8f8eb1e3566f7df7a682f8c9e33",
"assets/assets/images/categorias/cat-pro-esp.webp": "365a8dd9784d426ef93699fee21247a8",
"assets/assets/images/categorias/cat-pro-cocteles.webp": "cecb04f094b02f98dc0f0594e58117d1",
"assets/assets/images/toqueSuper/movil/ts-footer.webp": "8f18a14a2c9e624fd2d05d2fbb548394",
"assets/assets/images/toqueSuper/movil/ts-portada.webp": "be8e234adb1e31efc69bb6165de10b52",
"assets/assets/images/toqueSuper/ts-back1.webp": "75a1eeb71a36fc4c57e69b3294423a00",
"assets/assets/images/toqueSuper/desktop/ts-footer.webp": "276bd688bf692d145cb698cdf516939f",
"assets/assets/images/toqueSuper/desktop/ts-portada.webp": "58f7224d28f582261a41f75fa34b53e2",
"assets/assets/images/toqueSuper/ts-vid-002.webp": "ff2800131551b23b2cdc319614b9ffb5",
"assets/assets/images/toqueSuper/ts-vid-001.webp": "814a1cce1cb4f8103c1549bfb4acebb8",
"assets/assets/images/recomendados/rec-001.webp": "cc67cfe7766a6169f255c3a922dba617",
"assets/assets/images/recomendados/rec-003.webp": "c0b15adf69bd72213734568e847f9c01",
"assets/assets/images/recomendados/rec-002.webp": "043ad393d9e1ea405808b97970e5aff6",
"assets/assets/images/navidadBar.png": "dbc974643e17c148e1c150c8d97baf04",
"assets/assets/images/icons/ico-recetas.webp": "aae0150dd119054371a8a06efedc0165",
"assets/assets/images/icons/ico-tips.webp": "ba58321dd90343b8bfb3903b64b63d38",
"assets/assets/images/descrip2.png": "15ae8c5234835d77c8e6defd009b65be",
"assets/assets/images/aux/receta-003.webp": "06a3e00ee58e1a2508690785a3d5bef6",
"assets/assets/images/aux/recteta-sub.webp": "d2915a1c0cf198c2f39ab72b77456478",
"assets/assets/images/aux/receta-002.webp": "164338fbb9a1c628d4fb7350ee432241",
"assets/assets/images/aux/recta-com-001.webp": "1eab69ae35322ebfc0d78fba111fb2ec",
"assets/assets/images/aux/receta-portada.webp": "3b81174b610889ad9b06b55fa16a4600",
"assets/assets/images/aux/receta-portada.png": "20c31e3d89a58611c09c920894d8be83",
"assets/assets/images/aux/rec-002.webp": "259cfccdd8bc931daac6f300279008bb",
"assets/assets/images/aux/receta-ing-001.webp": "08ab90c897cd4ae2102e889b8495edf8",
"assets/assets/images/aux/receta-001.webp": "e0d7ccc44627e51152cb0f8068646fbe",
"assets/assets/images/aux/receta-descripcon.webp": "992008c0291ed881e4695ee8976c5ac4",
"assets/assets/images/aux/cot-001.webp": "7bf7d74126377b9c617934f102de3a90",
"assets/assets/images/super_header2.png": "c3bbb6a617d9d907d44ab676e8761cf2",
"assets/assets/images/btn-tipti-com.png": "abbf29c81e12cf16bd9d746166e6370e",
"assets/assets/images/btn-tipti.png": "50f3f047f64b984fd3ebd96a7950a4df",
"assets/assets/images/home-desktop/text_super_reco.webp": "f5ee586a9f02e799035407355a83f23b",
"assets/assets/images/home-desktop/home_port.png": "dcbfdc27ce75a849e2f6e6f9b85f1391",
"assets/assets/images/home-desktop/home_footer.webp": "5b5c9d511a8d37a3e22f0d3c400314b0",
"assets/assets/images/home-desktop/home_port2.webp": "556c5a40af6cefbbda9895c4088f559e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
