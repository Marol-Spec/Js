var body = $response.body;
var obj = JSON.parse(body);

if ($request.url === 'https://us-central1-alight-creative.cloudfunctions.net/getAccountStatusAndLicenses') {
  obj.result.licenses = [
    {
      "productId": "alightcreative.motion.1y_t60_1w",
      "label": null,
      "benefits": [
        "RemoveWatermark",
        "MemberEffects",
        "ProjectPackageSharing",
        "FutureMemberFeatures",
        "AdvancedEasing",
        "CameraObjects",
        "LayerParenting"
      ],
      "period": "1y",
      "valid": true,
      "expires": 1875685585000,
      "details": null,
      "type": "subscription",
      "autoRenewing": true,
      "orderNumber": "190001608392013",
      "linkStatus": "linked-current",
      "store": "apple_app_store"
    }
  ];
} else if ($request.url === 'https://us-central1-alight-creative.cloudfunctions.net/registerAppStorePurchase') {
  obj.result.products = [
    {
      "product_id": "alightcreative.motion.1y_t60_1w",
      "quantity": 1,
      "expires_date_ms": 1875685585000,
      "purchase_date_ms": 1686153541000,
      "cancellation_date_ms": null,
      "original_purchase_date_ms": 1686153541000,
      "is_trial_period": false,
      "token": "AC01.-NXL_JY5Nrc6OF23NPSX",
      "original_transaction_id": "190001608392013"
    }
  ];
}

body = JSON.stringify(obj);
$done({ body });
