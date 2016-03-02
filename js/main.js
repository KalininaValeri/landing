/**
 * Created by home on 02.03.2016.
 */
$(function() {
  $('#slider').cycle({

            pagerAnchorBuilder: function(index, DOMelement) {
                return '<a href="#" class="switch_element"></a>';
            },
         activePagerClass: 'active',
          fx: 'shuffle',
          speed: 100,
    timeout: 10000,
          pager: '#switch'
});
});
