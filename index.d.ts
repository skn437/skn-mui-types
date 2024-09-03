import { type Theme, type SxProps } from "@mui/material/styles";

/**
 * SKN Material UI Type Extension Library
 *
 * @author SKN Shukhan
 * @version 1.0.1
 * @since 2024-08-25
 * */
declare module "@mui/material" {
  /**
   * Provides total intellisense of material ui styles in separate files to be used as `sx`
   *
   * This type will help to de-clutter your jsx/tsx components because you can create `sx` styles outside
   * the components with proper intellisense
   *
   * Example:
   *
   * ```typescript
   * import type { Sx } from "@mui/material";
   *
   * type Key = "container" | "box"; // * Create sx names here
   *
   * export const sx: Sx<Key> = {
   *   //* You'll get total intellisense for `sx` names
   *   container: {
   *     //* You'll get intellisense for Material UI SX styles inside
   *     display: "flex",
   *     //* other styles here...
   *   },
   *   box: {
   *     color: "blue",
   *     //* other styles here...
   *   },
   * };
   * ```
   *
   * ```typescript jsx
   * "use client"
   *
   *  import Typography from "@mui/material/Typography";
   *  import { sx } from "./sx.ts";
   *
   *  const HomeComponent: React.FC<unknown> = () => {
   *    return (
   *      <Typography
   *        variant="h6"
   *        component="div"
   *        sx={sx.box} //* Use `sx` style here
   *      >
   *        Home Component
   *      </Typography>
   *    );
   *  };
   *
   *  export default HomeComponent;
   * ```
   * @since v1.0.0
   * */
  type Sx<T extends string | number | symbol> = Record<T, SxProps<Theme>>;
}
