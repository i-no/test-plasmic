// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uGTKGHAJVMXm8ZgFsPiEnc
// Component: daVRe48Vf8mo
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import StaImageStory from "../../StaImageStory"; // plasmic-import: xiRghhzFUA/component
import StaPersonals from "../../StaPersonals"; // plasmic-import: OWFGQTuz6D/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sta_draghi.module.css"; // plasmic-import: uGTKGHAJVMXm8ZgFsPiEnc/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: daVRe48Vf8mo/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

export const defaultHomepage__Args = {};

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      {true ? (
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <StaImageStory
            data-plasmic-name={"staImageStory"}
            data-plasmic-override={overrides.staImageStory}
            className={classNames("__wab_instance", sty.staImageStory)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <StaPersonals
              className={classNames("__wab_instance", sty.staPersonals___8YbJh)}
            />

            <StaPersonals
              className={classNames("__wab_instance", sty.staPersonals__enfth)}
            />

            <StaPersonals
              className={classNames("__wab_instance", sty.staPersonals__iRFx7)}
            />
          </p.Stack>
        </div>
      ) : null}
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "staImageStory", "freeBox"],
  staImageStory: ["staImageStory"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    staImageStory: makeNodeComponent("staImageStory"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
