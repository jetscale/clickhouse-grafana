System.register(['./datasource', './query_ctrl'], function(exports_1) {
    var datasource_1, query_ctrl_1;
    var SqlConfigCtrl;
    return {
        setters:[
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            }],
        execute: function() {
            SqlConfigCtrl = (function () {
                function SqlConfigCtrl() {
                }
                SqlConfigCtrl.templateUrl = 'partials/config.html';
                return SqlConfigCtrl;
            })();
            exports_1("Datasource", datasource_1.ClickHouseDatasource);
            exports_1("QueryCtrl", query_ctrl_1.SqlQueryCtrl);
            exports_1("ConfigCtrl", SqlConfigCtrl);
        }
    }
});
//# sourceMappingURL=module.js.map