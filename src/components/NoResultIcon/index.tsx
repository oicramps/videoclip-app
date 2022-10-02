import React from 'react'

const NoResultIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={256} height={256}>
      <path
        style={{
          fillRule: 'nonzero',
          fill: '#dadada',
          fillOpacity: 1,
          strokeWidth: 1,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d='M235.996 1159.004C215.996 1143.008 210 1130 210 1100c0-70 71.992-103.008 125.996-56.992 37.012 32.988 37.012 80.996 0 113.984-34.004 28.008-65 29.004-100 2.012Zm88.008-40.996c15-24.004-3.008-52.012-37.012-56.016-32.988-3.984-52.988 28.008-36.992 59.004 14.004 25 58.008 23.008 74.004-2.988ZM755 1095c-14.004-13.008-25-35.996-25-50 0-33.008 41.992-75 75-75 14.004 0 36.992 10.996 50 25 14.004 13.008 25 35.996 25 50 0 14.004-10.996 36.992-25 50-13.008 14.004-35.996 25-50 25-14.004 0-36.992-10.996-50-25Zm73.008-24.004c7.988-4.004 11.992-19.004 10-31.992-4.004-33.008-53.008-40-63.008-9.004-10.996 35.996 21.992 60.996 53.008 40.996ZM366.992 999.004c-10.996-5.996-23.984-23.008-30.996-38.008C330 946.992 301.992 905 275 868.008L225 800H123.008C31.992 800 20 798.008 10 780.996c-14.004-27.988-13.008-224.004 1.992-239.004C20 534.004 60.996 530 130 530h105l35-46.992C310.996 426.992 384.004 375 443.008 359.004c62.988-17.012 173.984-8.008 226.992 17.988L714.004 400 865 250c91.992-90.996 159.004-150 170.996-150 32.012 0 64.004 29.004 64.004 58.008 0 20.996-30.996 57.988-150 176.992-145.996 145.996-150 150.996-134.004 173.008C830.996 530 835 530 1044.004 530c150.996 0 215 3.008 224.004 11.992 15 15 15.996 211.016 1.992 239.004-10 18.008-23.008 19.004-165 19.004-128.008 0-155-1.992-155-14.004 0-9.004 11.992-15.996 33.008-17.988L1015 765V565l-88.008-3.008-87.988-2.988 7.988 27.988c4.004 15 7.012 63.008 7.012 106.016-2.012 68.984 0 76.992 16.992 76.992 10.996 0 19.004 6.992 19.004 15 0 10-10 15-28.008 15-20.996 0-31.992 8.008-45.996 35-26.992 49.004-97.988 113.008-154.004 138.008C633.008 985 585.996 995 540 996.992c-40.996 3.008-93.008 7.012-115 9.004-21.992 2.012-48.008-.996-58.008-6.992Zm93.008-55c18.008-45.996-25.996-88.008-68.008-65C365.996 893.008 359.004 915 370 945c8.008 20 15.996 25 45 25 29.004 0 36.992-5 45-25.996Zm196.992-12.012c61.016-31.992 96.016-65 127.012-121.992C889.004 618.008 750 386.992 530 386.992c-80.996 0-141.992 25-200 83.008-43.008 43.008-79.004 109.004-80 145.996 0 23.008-25 40-35 24.004-3.008-5-3.008-25 .996-45l5.996-35H39.004l2.988 103.008L45 765l88.008 3.008L220 770.996l-1.992-32.988C214.004 690 240 695 255 745c15 53.008 38.008 95.996 63.008 118.008C335 879.004 338.008 879.004 350 865c10-13.008 8.008-21.992-13.008-53.008-65.996-96.992-57.988-220 22.012-305C389.004 474.004 450 440 480 440c35.996 0 20.996 25-31.992 50-124.004 60-156.016 213.008-66.016 315.996C399.004 825 418.008 840 425.996 840c7.012 0 30.996 9.004 54.004 20.996 29.004 15 49.004 19.004 78.008 14.004 140-23.008 218.984-171.992 155.996-295.996-18.008-37.012-75.996-85-118.008-99.004-50.996-15.996-50-45 .996-36.992 55 8.984 114.004 56.992 146.016 117.988 25 48.008 27.988 62.012 25 125.996-3.008 60-8.008 79.004-33.008 115-45.996 64.004-101.992 99.004-171.992 107.012-51.016 5-58.008 9.004-61.016 30-3.984 22.988-2.988 24.004 55 19.004 33.008-3.008 78.008-15 100-26.016Zm581.016-268.984L1240.996 560H1050v98.008c0 53.984 3.008 101.992 6.992 105.996 4.004 4.004 46.016 5 93.008 4.004l85-3.008ZM800 434.004c10.996-12.012 10-18.008-3.008-32.012-15.996-15-17.988-15-33.984 0-13.008 14.004-14.004 20-3.008 32.012 6.992 9.004 15.996 15.996 20 15.996s13.008-6.992 20-15.996Zm151.992-150.996C1055.996 180 1080.996 140 1041.992 140c-8.984 0-65.996 49.004-125.996 109.004-94.004 95-107.988 111.992-96.992 125 7.988 9.004 15.996 15.996 20 15.996 2.988 0 54.004-48.008 112.988-106.992Zm0 0'
        transform='matrix(.2 0 0 -.2 0 256)'
      />
      <path
        style={{
          fillRule: 'nonzero',
          fill: '#dadada',
          fillOpacity: 1,
          strokeWidth: 1,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d='M620.996 715.996c-11.992-14.004-5-25.996 15.996-25.996 15 0 18.008 25.996 4.004 34.004-5 2.988-14.004 0-20-8.008ZM410 705c0-10 6.992-15 18.008-13.008 20.996 4.004 18.984 22.012-2.012 26.016C415.996 720 410 715 410 705ZM500 653.008c-30.996-11.016-40.996-25-29.004-39.004 8.008-10 15.996-10 35-2.012 17.012 8.008 30.996 8.008 48.008 0 12.988-5.996 26.992-7.988 30-5 14.004 15 4.004 32.012-25 42.012-35 11.992-37.012 11.992-59.004 4.004ZM1121.992 708.008c-6.992-7.012-11.992-20-11.992-30s-5-27.012-11.992-38.008c-16.016-25-3.008-38.008 21.992-21.992C1130.996 625 1150.996 630 1165 630c33.008 0 51.992 38.008 35.996 69.004-12.988 22.988-59.004 29.004-79.004 9.004ZM1165 680.996c3.008-5 .996-11.992-5-15.996-5-3.008-10 .996-10 9.004 0 17.988 5.996 20.996 15 6.992ZM130 956.992c0-6.992 5-17.988 10.996-23.984 8.008-8.008 8.008-13.008 0-17.012-26.992-16.992-10-32.988 34.004-32.988 43.008 0 60.996 15.996 35 31.992-5.996 4.004-5 13.008 1.992 25C228.008 965 215 978.008 190 961.992c-11.992-6.992-20.996-7.988-25-1.992-9.004 15-35 11.992-35-3.008ZM875.996 930.996C873.008 926.992 875 918.008 880 910c5-9.004 5-19.004-.996-26.992-17.012-20-3.008-29.004 42.988-28.008 33.008 0 42.012 4.004 39.004 15-5 19.004-5 30.996 0 50 3.008 10.996-6.992 15-37.988 15.996-24.004.996-45-.996-47.012-5Zm0 0'
        transform='matrix(.2 0 0 -.2 0 256)'
      />
    </svg>
  )
}

export default NoResultIcon
