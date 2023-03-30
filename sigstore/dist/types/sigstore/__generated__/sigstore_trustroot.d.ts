import { DistinguishedName, HashAlgorithm, LogId, PublicKey, TimeRange, X509CertificateChain } from "./sigstore_common";
/**
 * TransparencyLogInstance describes the immutable parameters from a
 * transparency log.
 * See https://www.rfc-editor.org/rfc/rfc9162.html#name-log-parameters
 * for more details.
 * The incluced parameters are the minimal set required to identify a log,
 * and verify an inclusion promise.
 */
export interface TransparencyLogInstance {
    /** The base URL at which can be used to URLs for the client. */
    baseUrl: string;
    /** The hash algorithm used for the Merkle Tree. */
    hashAlgorithm: HashAlgorithm;
    /**
     * The public key used to verify signatures generated by the log.
     * This attribute contains the signature algorithm used by the log.
     */
    publicKey: PublicKey | undefined;
    /** The unique identifier for this transparency log. */
    logId: LogId | undefined;
}
/**
 * CertificateAuthority enlists the information required to identify which
 * CA to use and perform signature verification.
 */
export interface CertificateAuthority {
    /**
     * The root certificate MUST be self-signed, and so the subject and
     * issuer are the same.
     */
    subject: DistinguishedName | undefined;
    /** The URI at which the CA can be accessed. */
    uri: string;
    /** The certificate chain for this CA. */
    certChain: X509CertificateChain | undefined;
    /**
     * The time the *entire* chain was valid. This is at max the
     * longest interval when *all* certificates in the chain were valid,
     * but it MAY be shorter.
     */
    validFor: TimeRange | undefined;
}
/**
 * TrustedRoot describes the client's complete set of trusted entities.
 * How the TrustedRoot is populated is not specified, but can be a
 * combination of many sources such as TUF repositories, files on disk etc.
 *
 * The TrustedRoot is not meant to be used for any artifact verification, only
 * to capture the complete/global set of trusted verification materials.
 * When verifying an artifact, based on the artifact and policies, a selection
 * of keys/authorities are expected to be extracted and provided to the
 * verification function. This way the set of keys/authorities kan be kept to
 * a minimal set by the policy to gain better control over what signatures
 * that are allowed.
 */
export interface TrustedRoot {
    /** MUST be application/vnd.dev.sigstore.trustedroot+json;version=0.1 */
    mediaType: string;
    /** A set of trusted Rekor servers. */
    tlogs: TransparencyLogInstance[];
    /**
     * A set of trusted certificate authorites (e.g Fulcio), and any
     * intermediate certificates they provide.
     * If a CA is issuing multiple intermediate certificate, each
     * combination shall be represented as separate chain. I.e, a single
     * root cert may appear in multiple chains but with different
     * intermediate and/or leaf certificates.
     * The certificates are intended to be used for verifying artifact
     * signatures.
     */
    certificateAuthorities: CertificateAuthority[];
    /** A set of trusted certificate transparency logs. */
    ctlogs: TransparencyLogInstance[];
    /** A set of trusted timestamping authorities. */
    timestampAuthorities: CertificateAuthority[];
}
export declare const TransparencyLogInstance: {
    fromJSON(object: any): TransparencyLogInstance;
    toJSON(message: TransparencyLogInstance): unknown;
};
export declare const CertificateAuthority: {
    fromJSON(object: any): CertificateAuthority;
    toJSON(message: CertificateAuthority): unknown;
};
export declare const TrustedRoot: {
    fromJSON(object: any): TrustedRoot;
    toJSON(message: TrustedRoot): unknown;
};
