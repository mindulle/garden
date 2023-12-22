import {
  App,
  Component,
  Plugin,
  PluginSettingTab,
  Setting,
  type MarkdownPostProcessorContext,
} from "obsidian";
import RaindropBlockQueryProvider from "src/components/RaindropBlockQueryProvider.svelte";

import type {
  BlockQueryMap,
  BlockQueryMapKeys,
} from "src/types";


export interface ObsidianRaindropSettings {
  raindropAccessToken: string;
  bookmarkListRefreshInterval: number;
}

const DEFAULT_SETTINGS: ObsidianRaindropSettings = {
  raindropAccessToken: "",
  bookmarkListRefreshInterval: 60,
};

export default class ObsidianRaindrop extends Plugin {
  settings: ObsidianRaindropSettings;
  

  async onload() {
    // console.info("onload");

    await this.loadSettings();
    this.registerPostProcessors();

    this.addSettingTab(new ObsidianRaindropSettingsTab(this.app, this));
  }

  onunload() {
    // console.info("onunload");
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  /**
   * registerPostProcessors
   *
   * We use a code block preprocessor to parse the content for running queries to Raindrop
   * whenever the code block language is set to 'raindrop'
   */
  private registerPostProcessors() {
    // Raindrop code blocks.
    let registered = this.registerMarkdownCodeBlockProcessor(
      "raindrop",
      async (source: string, el, ctx) => {
        this.viewFromCodeBlock(source, el, ctx, ctx.sourcePath);
      }
    );
    registered.sortOrder = -100;
  }

  /**
   * Generate HTML elements and append them to the provided element based on
   * the results of a query to Raindrop using the provided parameters in a
   * codeblock with the 'raindrop' language defined.
   *
   * https://developer.raindrop.io/v1/raindrops/multiple#common-parameters
   * https://help.raindrop.io/using-search/#operators
   *
   * Collections special IDs:
   *
   * 	0 to get all (except Trash)
   * 	-1 to get from "Unsorted"
   * 	-99 to get from "Trash"
   *
   * @param {string} source Text content of the codeblock
   * @param {HTMLElement} el HTML element to which this code block is attached
   * @param {Component} component Obsidian component
   * @param {string} sourcePath
   */
  public async viewFromCodeBlock(
    source: string,
    el: HTMLElement,
    component: Component | MarkdownPostProcessorContext,
    sourcePath: string
  ) {
    // console.info('viewFromCodeBlock');

    const paramMap: BlockQueryMap = {
      highlights: false,
      raindropIDs: "",
      search: "",
      format: "",
      sort: "",
      showTags: true,
      collection: undefined,
    };

    Object.keys(paramMap).forEach((key: BlockQueryMapKeys) => {
      const re = new RegExp(`${key}:(.*)`);
      const matchArr = source.match(re);
      let result: string | number =
        matchArr && matchArr.length > 1 ? matchArr[1].trim() : null;
      console.log(key, result);
      if (key === 'collection') {
        paramMap['collection'] = (result === null) ? null : parseInt(result);
      } else if (key === 'showTags') {
        paramMap['showTags'] = (result !== 'false');
      } else if (key === 'highlights') {
        paramMap['highlights'] = (result === 'true');
      } else {
        paramMap[key] = result;
      }
    });

    try {
      new RaindropBlockQueryProvider({
        target: el,
        props: {
          params: paramMap,
          settings: this.settings,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}

/**
 *
 * We use the *test token* from an app the user sets up themselves.
 * The only way to securely use an app otherwise would be to establish
 * a server/service for oauth to hide secret and I'm not up for supporting that.
 *
 * https://developer.raindrop.io/v1/authentication/token
 */
class ObsidianRaindropSettingsTab extends PluginSettingTab {
  plugin: ObsidianRaindrop;

  constructor(app: App, plugin: ObsidianRaindrop) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    containerEl.createEl("h2", { text: "Raindrop Settings" });

    new Setting(containerEl)
      .setName("Raindrop Test Token")
      .setDesc("Test access token used to authenticate with Raindrop.io")
      .addText((text) =>
        text
          .setPlaceholder("")
          .setValue(this.plugin.settings.raindropAccessToken)
          .onChange(async (value) => {
            this.plugin.settings.raindropAccessToken = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Bookmark List Refresh Interval")
      .setDesc(
        "How long (in minutes) to wait before automatically refetching bookmarks for the code block inclusions."
      )
      .addText((text) =>
        text
          .setPlaceholder("60")
          .setValue(this.plugin.settings.bookmarkListRefreshInterval.toString())
          .onChange(async (value) => {
            const valueAsInt = parseInt(value);
            if(isNaN(valueAsInt)) {
              
            }
            this.plugin.settings.bookmarkListRefreshInterval = valueAsInt;
            await this.plugin.saveSettings();
          })
      );
  }
}
