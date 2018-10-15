// Imported by upgrade step in: /portal_tinymce/@@tinymce-controlpanel - Resource Types - Custom Plugins:
// copernicus_table_colors|portal_skins/copernicus_table_colors/editor_plugin.js
(function() {
  // Load plugin specific language pack
  tinymce.PluginManager.requireLangPack('copernicus_table_colors');

  tinymce.create('tinymce.plugins.CopernicusTableColorsPlugin', {
    /**
     * Initializes the plugin, this will be executed after the plugin has been created.
     * This call is done before the editor instance has finished it's initialization so use the onInit event
     * of the editor instance to intercept that event.
     *
     * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
     * @param {string} url Absolute URL to where the plugin is located.
     */
    init : function(ed, url) {
      // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceCopernicusTableColors');
      ed.addCommand('mceCopernicusTableColors', function() {
        ed.windowManager.open({
          file : url + '/copernicus_table_colors.html',
          width : 500 + ed.getLang('copernicus_table_colors.delta_width', 0),
          height : 400 + ed.getLang('copernicus_table_colors.delta_height', 0),
          inline : 1
        }, {
          plugin_url : url, // Plugin absolute URL
        });
      });

      // Register copernicus_table_colors button
      ed.addButton('copernicus_table_colors', {
        title : 'Copernicus Table Colors',
        cmd : 'mceCopernicusTableColors',
        image : url + '/img/copernicus_table_colors.png'
      });

      // Add a node change handler, selects the button in the UI when a table cell is selected
      ed.onNodeChange.add(function(ed, cm, n) {
        cm.setActive('copernicus_table_colors', $(n).closest("table td, table th").length);
      });
    },

    /**
     * Creates control instances based in the incomming name. This method is normally not
     * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
     * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
     * method can be used to create those.
     *
     * @param {String} n Name of the control to create.
     * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
     * @return {tinymce.ui.Control} New control instance or null if no control was created.
     */
    createControl : function(n, cm) {
      return null;
    },

    _onSave: function() {
      function table_fill_cell(element, color) {
        $(element).css("background-color", color);
      }

      function table_fill(element, color, fill_type) {
        if(fill_type == "cell") {
          table_fill_cell(element, color);
          return;
        }

        if(fill_type == "row") {
          $(element).parent().children().each(function() {
            table_fill_cell($(this), color)
          });
        }

        if(fill_type == "column") {
          $(element).closest("table").find(
            "tr td:nth-child(" + ($(element).index() + 1) + ")"
          ).each(function() {
            table_fill_cell($(this), color);
          });

          $(element).closest("table").find(
            "tr th:nth-child(" + ($(element).index() + 1) + ")"
          ).each(function() {
            table_fill_cell($(this), color);
          });
        }
      }

      var selected_node = tinyMCE.activeEditor.selection.getNode();
      var selected_element = $(selected_node);

      var selected_fill_type = $("iframe").contents().find('#select-type').first().attr("data-selected-type");
      var selected_color = $("iframe").contents().find('#select-color').first().attr("data-selected-color");

      table_fill(selected_element, selected_color, selected_fill_type);

      // // Insert items in given selection
      // tinyMCE.activeEditor.selection.setContent(html_content);
    },

    _onEdit: function() {
    },

    /**
     * Returns information about the plugin as a name/value array.
     * The current keys are longname, author, authorurl, infourl and version.
     *
     * @return {Object} Name/value array containing information about the plugin.
     */
    getInfo : function() {
      return {
        longname : 'CopernicusTableColors plugin',
        author : 'Ghiță Bizău',
        authorurl : 'https://github.com/GhitaB',
        infourl : '',
        version : "1.0"
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('copernicus_table_colors', tinymce.plugins.CopernicusTableColorsPlugin);
})();

// TODO
// - get rid of cdn scripts
// - keep last color used as selected by default
// - close dialog window on save
// - make sure you can fill only tds and ths
// - test on IE and Firefox
