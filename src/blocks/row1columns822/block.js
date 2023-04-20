/**
 * BLOCK: row1columns822
 * @param {Object} opts - Global block options
 * @param {Object} blockProps - Specific block options
 * @return {Object} - Block object
 */
export default (opts = {}, blockProps) => {
  const { ...defaultOpts } = opts;
  const { attrsRow, attrsCell, styleRow, styleClm, category, select } =
    blockProps;

  const block = {
    category: category,
    select: select,
    id: "1row ",
    label: "1 Row 8/2/2 Columns",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#3871E0"/>
    <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 110.647 0)"   stroke-width="2"/>
    <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 92.0117 0)"   stroke-width="2"/>
    <rect x="-1" y="1" width="72.5412" height="64" rx="3" transform="matrix(-1 0 0 1 73.377 0)"   stroke-width="2"/>
    </svg>
              `,
    content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-8 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
  </div>
              ${`<style>
                  ${styleRow}
                  ${styleClm}
                </style>`}
              `,
  };

  return block;
};
