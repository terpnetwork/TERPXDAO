import { SVGProps } from 'react'

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={props.color || 'currentColor'}
    height="1em"
    viewBox="0 0 24 23"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12 0C5.37 0 0 5.276 0 11.79c0 5.218 3.435 9.625 8.205 11.188.6.103.825-.251.825-.56 0-.28-.015-1.21-.015-2.197C6 20.767 5.22 19.5 4.98 18.836c-.135-.34-.72-1.385-1.23-1.665-.42-.222-1.02-.767-.015-.782.945-.014 1.62.855 1.845 1.209 1.08 1.783 2.805 1.282 3.495.973.105-.767.42-1.283.765-1.577-2.67-.295-5.46-1.312-5.46-5.822 0-1.282.465-2.344 1.23-3.169-.12-.295-.54-1.503.12-3.125 0 0 1.005-.309 3.3 1.209a11.32 11.32 0 0 1 3-.398c1.02 0 2.04.133 3 .398 2.295-1.533 3.3-1.209 3.3-1.209.66 1.622.24 2.83.12 3.125.765.825 1.23 1.872 1.23 3.169 0 4.525-2.805 5.527-5.475 5.822.435.368.81 1.076.81 2.18 0 1.578-.015 2.846-.015 3.243 0 .31.225.678.825.56C20.565 21.415 24 16.994 24 11.791 24 5.276 18.63 0 12 0Z"
      fillRule="evenodd"
    />
  </svg>
)
